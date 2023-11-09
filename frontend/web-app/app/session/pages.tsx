import { getSession } from 'next-auth/react';
import { FC } from 'react'
import Heading from '../components/Heading';

interface Props {
    
}
 
const Session: FC<Props> = async () => {
    const session = await getSession();

    return ( 
        <div>
            <Heading title='Session dashboard'/>
            <div className='bg-blue-200 border-2 border-blue-500'>
                <h3 className='text-lg'>Session data</h3>
                <pre>{JSON.stringify(session, null, 2)}</pre>
            </div>
        </div> 
    );
}
 
export default Session;