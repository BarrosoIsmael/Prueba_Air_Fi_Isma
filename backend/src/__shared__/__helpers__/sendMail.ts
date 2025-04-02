import * as dotenv from 'dotenv';
import * as nodemailer from 'nodemailer';
import * as fs from 'fs';
import * as path from 'path';

dotenv.config();

export interface EmailOptions {
    to: string;
    subject: string;
    html: string;
}

export class SendEmail {
    private transporter: nodemailer.Transporter;

    constructor() {
        this.transporter = nodemailer.createTransport({
            host: process.env.EMAIL_SENDER_HOST,
            port: parseInt(process.env.EMAIL_SENDER_PORT || '587'),
            secure: false,
            auth: {
                user: process.env.EMAIL_SENDER,
                pass: process.env.EMAIL_SENDER_PASSWORD,
            },
            tls: {
                rejectUnauthorized: false,
            },
        });
    }


    private loadTemplate(
        templateName: string,
        variables: Record<string, string | number>,
    ): string {
        const filePath = path.join(__dirname, '__templates__', `${templateName}.html`);
        let template = fs.readFileSync(filePath, 'utf8');

        for (const [key, value] of Object.entries(variables)) {
            template = template.replace(new RegExp(`{{${key}}}`, 'g'), String(value));
        }
        return template;
    }

    public async sendEmail(options: EmailOptions): Promise<void> {
        const emailOptions = {
            from: process.env.EMAIL_SENDER || '',
            ...options,
        };
        await this.transporter.sendMail(emailOptions);
    }

    public async sendVerificationEmail(email: string, code: string): Promise<void> {
        const html = this.loadTemplate('verification', { code });
        await this.sendEmail({
            to: email,
            subject: 'Verify your email address',
            html,
        });
    }


}