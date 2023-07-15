import { Menu } from '@headlessui/react';

type Props = {
    title: string;
    state: string;
    filters: Array<string>
    setState: (value: string) => void;
}


const CustomOption = ({ title, state, filters, setState }: Props) => {
    return (
        <div className='flex items-center justify-start flex-col w-full gap-7 relative'>
            <label htmlFor={title}
                className='w-full text-gray-500'>{title}</label>

            <Menu as="div" className="self-start relative">
                <div>
                    <Menu.Button className="flex items-center justify-center gap-4 w-full rounded-md bg-gray-100 p-4 text-base outline-none capitalize">
                        {state || 'Select a Category ↓'}
                    </Menu.Button>
                </div>
                <Menu.Items className="flex items-center justify-start 
                flex-col absolute left-0 mt-2 xs:min-w-[300px] w-fit max-h-64 origin-top-right rounded-xl bg-white border border-nav-border shadow-menu overflow-y-auto">
                    {filters.map((tag) => (
                        <Menu.Item key={tag}>
                            <button 
                                type="button"
                                value={tag}
                                className="text-left w-full px-5 py-2 text-sm hover:bg-light-white-100 self-start whitespace-nowrap capitalize"
                                onClick={(e) => setState(e.currentTarget.value)}
                            >{tag}</button>
                        </Menu.Item>
                    ))}
                </Menu.Items>
            </Menu>


            
        </div>
    )
}

export default CustomOption