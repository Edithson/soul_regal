import nodemailer from 'nodemailer';

export interface EmailPayload {
  name: string;
  organisation?: string;
  email: string;
  phone?: string;
  topic: string;
  message: string;
}

export interface EmailResult {
  sent: boolean;
  messageId?: string;
  error?: string;
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export async function sendContactEmail(payload: EmailPayload): Promise<EmailResult> {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || 465);
  const secure = process.env.SMTP_SECURE === 'true' || port === 465;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !user || !pass) {
    const errorMsg = 'SMTP_HOST, SMTP_USER ou SMTP_PASS manquant dans .env. Message sauvegardé en base de données, mais e-mail non envoyé.';
    console.warn(`[Mailer] ${errorMsg}`);
    return { sent: false, error: errorMsg };
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure,
    auth: { user, pass },
  });

  const mailTo = process.env.MAIL_TO || user;
  const mailFrom = process.env.MAIL_FROM || `"SRE — Du champ à votre cuisine" <${user}>`;

  const safeName = escapeHtml(payload.name);
  const safeOrg = escapeHtml(payload.organisation || 'Non précisée');
  const safeEmail = escapeHtml(payload.email);
  const safePhone = escapeHtml(payload.phone || 'Non précisé');
  const safeTopic = escapeHtml(payload.topic);
  const safeMessage = escapeHtml(payload.message).replace(/\n/g, '<br/>');

  const html = `
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="utf-8" />
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; background-color: #f7f5ee; margin: 0; padding: 24px; color: #1d3029; }
    .card { max-width: 620px; margin: 0 auto; background: #ffffff; border-radius: 6px; border: 1px solid #e1e7d8; overflow: hidden; box-shadow: 0 4px 14px rgba(23,57,47,0.06); }
    .header { background: #17392f; color: #ffffff; padding: 24px 28px; }
    .header h1 { margin: 0; font-size: 20px; font-weight: 600; color: #ffffff; }
    .header p { margin: 6px 0 0; font-size: 12px; color: #dce5c8; letter-spacing: 0.05em; }
    .content { padding: 26px 28px; }
    .badge { display: inline-block; padding: 4px 10px; background: #e9eddf; color: #17392f; font-size: 11px; font-weight: 700; border-radius: 3px; margin-bottom: 18px; }
    table { width: 100%; border-collapse: collapse; margin-bottom: 22px; font-size: 13px; }
    td { padding: 10px 12px; border-bottom: 1px solid #f0f2eb; }
    td.label { width: 140px; font-weight: 600; color: #536257; }
    td.value { color: #1d3029; }
    .message-box { background: #fbfaf6; border-left: 3px solid #d97857; padding: 16px 18px; border-radius: 2px; font-size: 13px; line-height: 1.65; color: #23342d; margin-top: 10px; }
    .footer { padding: 18px 28px; background: #f3f1e8; font-size: 11px; color: #788577; text-align: center; border-top: 1px solid #e5e9d9; }
  </style>
</head>
<body>
  <div class="card">
    <div class="header">
      <h1>Nouveau message de contact</h1>
      <p>SOUL REGAL SANS ÉGAL (SRE) — Du champ à votre cuisine</p>
    </div>
    <div class="content">
      <div class="badge">Sujet : ${safeTopic}</div>
      <table>
        <tr><td class="label">Nom complet</td><td class="value"><strong>${safeName}</strong></td></tr>
        <tr><td class="label">Organisation</td><td class="value">${safeOrg}</td></tr>
        <tr><td class="label">Adresse e-mail</td><td class="value"><a href="mailto:${safeEmail}" style="color:#17392f;font-weight:600;">${safeEmail}</a></td></tr>
        <tr><td class="label">Téléphone</td><td class="value">${payload.phone ? `<a href="tel:${safePhone}" style="color:#17392f;">${safePhone}</a>` : 'Non précisé'}</td></tr>
      </table>

      <strong style="font-size: 13px; color: #17392f;">Contenu de la demande :</strong>
      <div class="message-box">${safeMessage}</div>
    </div>
    <div class="footer">
      Message reçu depuis le site vitrine SRE (enregistré dans la base SQLite locale).
    </div>
  </div>
</body>
</html>
  `.trim();

  const text = [
    `NOUVEAU MESSAGE DE CONTACT - SRE`,
    `================================`,
    `Sujet : ${payload.topic}`,
    `Nom : ${payload.name}`,
    `Organisation : ${payload.organisation || 'Non précisée'}`,
    `E-mail : ${payload.email}`,
    `Téléphone : ${payload.phone || 'Non précisé'}`,
    ``,
    `Message :`,
    payload.message,
    ``,
    `---`,
    `Enregistré dans la base SQLite locale.`,
  ].join('\n');

  try {
    const info = await transporter.sendMail({
      from: mailFrom,
      to: mailTo,
      replyTo: `"${payload.name}" <${payload.email}>`,
      subject: `[SRE Contact] ${payload.topic} — ${payload.name}`,
      text,
      html,
    });

    return { sent: true, messageId: info.messageId };
  } catch (err: any) {
    const errorMsg = err?.message || String(err);
    console.error('[Mailer] Erreur SMTP :', errorMsg);
    return { sent: false, error: errorMsg };
  }
}
