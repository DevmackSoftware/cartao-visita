'use client';
import { BiSolidContact } from "react-icons/bi";

export default function SaveContactButton() {
    const handleSaveContact = () => {
        const vCardData = `
BEGIN:VCARD
VERSION:3.0
FN:Nélio Macuácua
TEL;TYPE=CELL:+258833067953
EMAIL:nelio.macuacua@devmack.com
END:VCARD
`.trim();

        const blob = new Blob([vCardData], { type: 'text/vcard' });
        const url = URL.createObjectURL(blob);

        const link = document.createElement('a');
        link.href = url;
        link.download = 'Nélio_Macuácua.vcf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    };

    return (
        <button
            onClick={handleSaveContact}
            className="flex justify-between items-center gap-4"
        >
            <BiSolidContact size={30} className="fill-zinc-400" />
            <div className="flex flex-col text-xs text-end">
                <span>Guardar nos contactos</span>
                <span>+258 83 306 7953</span>
            </div>
        </button>
    );
}
