'use client'
import { IoIosMail } from 'react-icons/io';
import Icon from '../techstack/Icon';

const Contact = () => {
    return (
        <section id="contact">
            <div className="font-Poppins flex flex-col items-center gap-4 mx-4 lg:mx-40 mt-6 mb-8 text-white" style={{ borderTop: '5px solid #ffff00', color: 'white' }}>
                <h1 className="text-3xl m-2 font-bold" style={{ color: '#ffff00' }}>Contact Yuya – Your catalyst for digital innovation</h1>
                <div className="flex gap-4">
                    <a className="text-yellow-500"  href="mailto:eternalguardian0607@gmail.com" target='_blank'>
                        <Icon>
                            <IoIosMail />
                        </Icon>
                    </a>
                
                </div>
                <p className="text-700" style={{ color: '#ffff00' }}>&#169; copyright-Yuya</p>
            </div>
        </section>
    );
};

export default Contact;
