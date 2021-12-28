import { useParams } from 'react-router';

export default function PaymentForm() {
    const { name } = useParams();
    
    return (
        <div>
            <h1>Funding {name}</h1>
        </div>
    )
}
 