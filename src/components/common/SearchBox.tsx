import { Cross, Search } from 'lucide-react'
import Input from '../ui/input'

interface SearchBoxProps extends React.ComponentProps<"input"> {
    onclear: () => void;
}

export default function SearchBox({ onclear, className, ...props }: SearchBoxProps) {
    const { value } = props;
    return <div className='flex items-center relative'>
        <Search width={16} className='text-slate-500 absolute left-2' />
        <Input className='px-8' {...props} />
        {
            Boolean(value) &&
            <Cross width={16} className='flex items-center absolute right-2 text-red-600' onClick={onclear} />
        }
    </div>
    
}

