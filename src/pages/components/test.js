import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';
export default function Test() {
    const [numFields, setNumFields] = useState(1);
    return (
        <div>
            <Form>
                <Form.List name='fields'>
                    {(fields, { add, remove }) => (
                        <>
                            {fields.map((field, index) => (
                                <Form.Item
                                    {...field}
                                    name={[field.name, 'input']}
                                    fieldKey={[field.fieldKey, 'input']}
                                    rules={[{ required: true, message: 'Input is required' }]}
                                >
                                    <Input placeholder='Enter input' />
                                </Form.Item>
                            ))}
                            <Form.Item>
                                <Button type='dashed' onClick={() => add()} block>
                                    Add field
                                </Button>
                            </Form.Item>
                        </>
                    )}
                </Form.List>
            </Form>
        </div>
    );
}
