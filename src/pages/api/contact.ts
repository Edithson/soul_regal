import type { APIRoute } from 'astro';
import { saveContactMessage, updateMailStatus } from '../../lib/db';
import { sendContactEmail } from '../../lib/mailer';

export const prerender = false;

export const POST: APIRoute = async ({ request, clientAddress }) => {
  try {
    const contentType = request.headers.get('content-type') || '';
    let name = '';
    let organisation = '';
    let email = '';
    let phone = '';
    let topic = '';
    let message = '';

    if (contentType.includes('application/json')) {
      const data = await request.json().catch(() => ({}));
      name = String(data.name || '').trim();
      organisation = String(data.organisation || '').trim();
      email = String(data.email || '').trim();
      phone = String(data.phone || '').trim();
      topic = String(data.topic || '').trim();
      message = String(data.message || '').trim();
    } else {
      const formData = await request.formData().catch(() => new FormData());
      name = String(formData.get('name') || '').trim();
      organisation = String(formData.get('organisation') || '').trim();
      email = String(formData.get('email') || '').trim();
      phone = String(formData.get('phone') || '').trim();
      topic = String(formData.get('topic') || '').trim();
      message = String(formData.get('message') || '').trim();
    }

    if (!name || !email || !topic || !message) {
      return new Response(
        JSON.stringify({
          success: false,
          message: 'Veuillez renseigner tous les champs obligatoires (nom, e-mail, besoin et message).',
        }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({
          success: false,
          message: 'Veuillez saisir une adresse e-mail valide.',
        }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const ipAddress = clientAddress || request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || '';
    const userAgent = request.headers.get('user-agent') || '';

    // 1. Sauvegarde systématique dans SQLite
    const messageId = saveContactMessage({
      name,
      organisation,
      email,
      phone,
      topic,
      message,
      ipAddress,
      userAgent,
      mailStatus: 'pending',
    });

    // 2. Tentative d'envoi d'e-mail
    const emailResult = await sendContactEmail({
      name,
      organisation,
      email,
      phone,
      topic,
      message,
    });

    // 3. Mise à jour du statut d'envoi dans SQLite
    updateMailStatus(messageId, emailResult.sent ? 'sent' : 'failed', emailResult.error);

    return new Response(
      JSON.stringify({
        success: true,
        message: 'Merci ! Votre demande a été enregistrée avec succès. Notre équipe vous recontactera très rapidement.',
        data: {
          id: messageId,
          mailSent: emailResult.sent,
        },
      }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error: any) {
    console.error('[API /api/contact] Erreur interne :', error);
    return new Response(
      JSON.stringify({
        success: false,
        message: 'Une erreur technique est survenue. Veuillez nous joindre directement par téléphone ou WhatsApp.',
      }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
