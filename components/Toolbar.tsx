import { Icon } from '@iconify/react';

declare type ToolbarProps = {
    preview: boolean;
    setPreview: (preview: boolean) => void;
}

const Toolbar = ({ preview, setPreview }: ToolbarProps) => {
    return (
        <div id='toolbar' className="fixed top-5 right-0 flex flex-col gap-2">
            {preview && (
                <>
                    <button onClick={() => setPreview(!preview)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-l-xl flex gap-2 items-center">
                        <Icon icon="mdi:clipboard-edit-outline" className='text-xl' />
                        <p>Edit</p>
                    </button>

                    <button onClick={() => window.print()} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-l-xl flex gap-2 items-center">
                        <Icon icon="mdi:printer-outline" className='text-xl' />
                        <p>Print</p>
                    </button>
                </>
            )}
            {
                preview || (
                    <button onClick={() => setPreview(!preview)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-l-xl flex gap-2 items-center">
                        <Icon icon="mdi:eye-outline" className='text-xl' />
                        <p>Preview</p>
                    </button>
                )
            }
        </div>
    )
}

export default Toolbar;