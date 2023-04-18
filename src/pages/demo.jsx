import React from 'react';
import { Select } from 'antd';
import 'antd/dist/antd.css';
import Output from './components/outpot';
import styles from '../styles/demo.module.scss';
export default function Demo() {
    const [selectType, setSelectType] = React.useState('输出');
    //下拉框处理函数
    const handleChange = value => {
        console.log(`selected ${value}`);
        setSelectType(value);
    };

    return (
        <div className={styles.card}>
            <div className='main'>
                <div className='service'>
                    <Select
                        defaultValue='私人数据库'
                        style={{ width: '100%' }}
                        onChange={handleChange}
                        options={[
                            {
                                value: '私人数据库',
                                label: '私人数据库',
                            },
                        ]}
                    />
                </div>
                <div className='output'>
                    <Select
                        defaultValue='输出'
                        style={{ width: '100%' }}
                        onChange={handleChange}
                        options={[
                            {
                                value: '输出',
                                label: '输出',
                            },
                            {
                                value: '随机获取',
                                label: '随机获取',
                            },
                            {
                                value: '分类统计',
                                label: '分类统计',
                            },
                            {
                                value: '执行自定义sql语句',
                                label: '执行自定义sql语句',
                            },
                        ]}
                    />
                    <div>
                        {selectType === '输出' && <Output />}
                        {selectType === '随机获取' && <div>2</div>}
                        {selectType === '分类统计' && <div>3</div>}
                        {selectType === '执行自定义sql语句' && <div>4</div>}
                    </div>
                </div>
            </div>
        </div>
    );
}
