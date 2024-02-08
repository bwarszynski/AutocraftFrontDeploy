import React, {useRef, useState} from 'react';
import emailjs from '@emailjs/browser'

export const Contact = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // klucze emailjsa podpięte do konta obsługującego
        const serviceId = 'service_jhkf5up';
        const templateId = 'template_6uw2i6g';
        const publicKey = 'zI131geOQfspuyBaL';

        // Nowy obiekt zawierający dane z template'a
        const templateParams = {
            from_name: name,
            from_email: email,
            to_name: 'ContactMaster',
            message: message,
        };

        // Wysyłanie wiadomości za pomocą emailjs
        emailjs.send(serviceId, templateId, templateParams, publicKey)
            .then((response) => {
                console.log('Email wysłany poprawnie!', response);
                setName('');
                setEmail('');
                setMessage('');
            }).catch ((error) => {
                console.error('Problem z wysyłką maila', error);
            });
    }

    return (
        <section>
            <div className="px-4 mx-auto max-w-screen-md">
                <h2 className="heading text-center">
                    Skontaktuj się z nami
                </h2>
                <p className="mb-8 lg:mb-16 font-light text-center text__para">
                    Masz problem techniczny? Chcesz zgłosić błąd? Daj nam znać!
                </p>
                <form  onSubmit={handleSubmit} className="space-y-8">
                    <div>
                        <label htmlFor="email" className="form__label">
                            Twój e-mail
                        </label>
                        <input
                            type="email"
                            value={email}
                            placeholder="Wpisz e-mail"
                            className="form__input mt-1"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="subject" className="form__label">
                            Imię</label>
                        <input
                            type="text"
                            value={name}
                            placeholder="Jak się nazywasz"
                            className="form__input mt-1"
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="message" className="form__label">
                            Twoja wiadomość</label>
                        <textarea
                            rows="6"
                            value={message}
                            placeholder="Pozostaw nam wiadomość..."
                            className="form__input mt-1"
                            onChange={(e) => setMessage(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="btn rounded sm:w-fit">
                        Wyślij
                    </button>
                </form>
            </div>
        </section>
    );
}

export default Contact;