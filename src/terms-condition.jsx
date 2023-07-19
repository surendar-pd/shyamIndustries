// import React from 'react'

const Terms = () => {

    const tocs = [
		'By accessing, browsing and/or using this web site, you acknowledge that you have read, understood, and agree to these terms and conditions. If you do not agree to the specified terms and conditions, we suggest you not to use this website.',
		'Any/all information on this website may be changed or updated without notice.',
		'This website may contains copyright information which cannot be re-produced by you without the prior written approval from Shree Shyam Industries By giving information, Shree Shyam Industries not grant any licenses to any copyrights or any other intellectual property rights.',
		'Information on this Web site may contain technical inaccuracies or typographical errors and you will not hold Shree Shyam Industries possible for losses/difficulties occurring because of such inaccuracies and errors. Shree Shyam Industries assumes no responsibility regarding the accuracy and use of such information is at the recipients own risk.',
		'Any information or material sent to Shree Shyam Industries through this website will be deemed NOT to be confidential. By sending Shree Shyam Industries any information or material, you grant Shree Shyam Industries an unrestricted, irrevocable license to use, reproduce, display, perform, modify, transmit and distribute those materials or information, and you also agree that Shree Shyam Industries is free to use any ideas, concepts, know-how or techniques that you send us for any purpose.',
		'Shree Shyam Industries makes no representations whatsoever about any other website which may be linked from this website. A link to a non- Shree Shyam Industries Web site does not mean that Shree Shyam Industries endorses or accepts any responsibility for the content, or the use, of such Web site. It is up to you to take precautions to ensure that whatever you select for your use is free of such items as viruses, worms, Trojan horses and other items of a destructive nature.',
		'When you access a non- Shree Shyam Industries Web site, even one that may contain our name / logo, please understand that it is independent from Shree Shyam Industries , and that Shree Shyam Industries has no control over the content on that Web site.',
        'In no event will Shree Shyam Industries be liable to any party for any direct, indirect, special or other consequential damages for any use of this web site, or on any other hyper linked website, including, without limitation, any lost profits, business interruption, loss of programs or other data on your information handling system or otherwise, even if we are expressly advised of the possibility of such damages.',
        'All information is provided by Shree Shyam Industries on an "as is" basis only. Shree Shyam Industries provides no representations and warranties, express or implied, including the implied warranties of fitness for a particular purpose, merchantability and non-infringement.',
        'Shree Shyam Industries may at any time revise these terms by updating this posting. By using this web site, you agree to be bound by any such revisions and should therefore periodically visit this page to determine the then current terms and conditions for accessing / using this website.'
	];
    
    return (
        <section className="bg-slate-100">
            <div className='mx-auto max-w-[1440px] px-6 py-24 md:px-8 lg:px-[5vw]'>
                <h1 className='mb-4 text-[32px] font-medium'>
                    Terms And Conditions
                </h1>
                    <ul className='list-disc text-justify text-[14px] text-[#777a85]'>
                        {tocs.map((toc, idx) => (
                            <li key={idx} className='leading-loose'>
                                {toc}
                            </li>
                        ))}
                    </ul>
            </div>
        </section>
    )
}

export default Terms