import React, { Fragment, useState } from 'react';
import styles from './components.module.scss';
import { AutoComplete, Button, Col, DatePicker, Input, InputNumber, Row, Select, Tabs } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import { Checkbox, Divider, Form, Radio } from 'antd';
export default function Output() {
    const CheckboxGroup = Checkbox.Group;
    const plainOptions = ['数据id', '提交用户', '创建时间', '更新时间'];
    const defaultCheckedList = ['数据id', '提交用户', '创建时间', '更新时间'];
    const [numFields, setNumFields] = useState(1);
    const [size, setSize] = useState('升序');
    const autoOptions = [
        {
            value: 'Header信息',
        },
        {
            value: 'IP信息',
        },
        {
            value: 'Cookie信息',
        },
        {
            value: '客户端信息',
        },
        {
            value: 'Body信息',
        },
        {
            value: 'URL信息',
        },
        {
            value: '当前用户',
        },
        {
            value: '从对象树选择',
        },
        {
            value: '搜索对象',
        },
        {
            value: '系统变量',
        },
        {
            value: '数学公式',
        },
    ];
    const [checkedList, setCheckedList] = useState(defaultCheckedList);
    const [indeterminate, setIndeterminate] = useState(true);
    const [checkAll, setCheckAll] = useState(false);
    const onCheckChange = list => {
        setCheckedList(list);
        setIndeterminate(!!list.length && list.length < plainOptions.length);
        setCheckAll(list.length === plainOptions.length);
    };
    const onCheckAllChange = e => {
        setCheckedList(e.target.checked ? plainOptions : []);
        setIndeterminate(false);
        setCheckAll(e.target.checked);
    };
    const { Option } = Select;
    const onChange = key => {
        console.log(key);
    };
    const onFinish = values => {
        console.log('Success:', values);
    };
    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };
    return (
        <Fragment>
            <Form
                name='demo'
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <div className={styles.root}>
                    <div className={styles.destext}>
                        <div className='text'>
                            <span>筛选条件</span>
                            <span>排序方式</span>
                            <span>输出行数</span>
                            <span>列</span>
                        </div>
                        <div className='equal'>
                            <span>=</span>
                            <span>=</span>
                            <span>=</span>
                            <span>=</span>
                        </div>
                    </div>
                    <div className={styles.condition}>
                        <Input.Group compact>
                            <Form.Item name={['sort', 'select']} initialValue='Option1'>
                                <Select>
                                    <Option value='Option1'>Option1</Option>
                                    <Option value='Option2'>Option2</Option>
                                </Select>
                            </Form.Item>
                            <Radio.Group value={size} onChange={e => setSize(e.target.value)}>
                                <Radio.Button value='升序'>升序</Radio.Button>
                                <Radio.Button value='降序'>降序</Radio.Button>
                            </Radio.Group>
                        </Input.Group>
                        <Input.Group compact>
                            <Form.Item
                                style={{
                                    width: 100,
                                }}
                                name={['output', 'first']}
                            >
                                <AutoComplete
                                    options={autoOptions}
                                    filterOption={(inputValue, option) =>
                                        option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
                                    }
                                />
                            </Form.Item>

                            <Input
                                className='site-input-split'
                                style={{
                                    width: 30,
                                    borderLeft: 0,
                                    borderRight: 0,
                                    pointerEvents: 'none',
                                }}
                                placeholder='~'
                                disabled
                            />
                            <Form.Item
                                style={{
                                    width: 100,
                                }}
                                name={['output', 'second']}
                            >
                                <AutoComplete
                                    options={autoOptions}
                                    filterOption={(inputValue, option) =>
                                        option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
                                    }
                                />
                            </Form.Item>

                            <Tabs
                                defaultActiveKey='1'
                                onChange={onChange}
                                items={[
                                    {
                                        label: `选择列`,
                                        key: '1',
                                        children: (
                                            <Form.Item name={['textarea', 'note']}>
                                                <TextArea placeholder='例如' />
                                            </Form.Item>
                                        ),
                                    },
                                    {
                                        label: `自定义列`,
                                        key: '2',
                                        children: (
                                            <div>
                                                <Checkbox
                                                    indeterminate={indeterminate}
                                                    onChange={onCheckAllChange}
                                                    checked={checkAll}
                                                >
                                                    全选
                                                </Checkbox>

                                                <CheckboxGroup
                                                    options={plainOptions}
                                                    value={checkedList}
                                                    onChange={onCheckChange}
                                                />
                                            </div>
                                        ),
                                    },
                                    {
                                        label: ``,
                                        key: '3',
                                        children: `Content of Tab Pane 3`,
                                    },
                                ]}
                            />
                        </Input.Group>{' '}
                        <Button type='primary' htmlType='submit'>
                            Submit
                        </Button>
                    </div>
                </div>
            </Form>
        </Fragment>
    );
}
