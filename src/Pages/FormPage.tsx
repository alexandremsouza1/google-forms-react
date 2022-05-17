import React from "react";


import Form from '../components/Form';
import Input from '../components/Input';
import Select from '../components/Select';
import Button from '../components/Button';




const FormPage = () => {
    return (
        <div>
        <Form>
            <Input placeholder="name" />
            <Input placeholder="email" />
            <Select options={[
            { id:1, value: 'chocolate', label: 'Chocolate' },
            { id:2, value: 'strawberry', label: 'Strawberry' },
            { id:3, value: 'vanilla', label: 'Vanilla' },
            ]} />
            <Button type="submit">Submit</Button>
        </Form>
        </div>
    );
}

export default FormPage;