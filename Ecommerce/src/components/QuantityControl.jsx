import { Button, ButtonGroup } from 'react-bootstrap';


export default function QuantityControl({onAddClick,onMinusClick,itemCount}){
    return (
        <ButtonGroup size="lg" className="mb-2">
<Button variant="outline-secondary" onClick={onMinusClick}>−</Button>
        <Button variant="outline-secondary">{itemCount}</Button>

<Button variant="outline-secondary" onClick={onAddClick}>+</Button>



    </ButtonGroup>);

}