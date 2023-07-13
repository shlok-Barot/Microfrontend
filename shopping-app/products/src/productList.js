import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Table, Space } from 'antd';
import faker from 'faker';
import moment from "moment";
import "antd/dist/antd.css";
import "./index.css";

const ProductList = () => {
    const [productData, SetProductData] = useState([])

    useEffect(() => {
        let tempArray = []
        for (let i = 0; i < 10; i++) {
            tempArray.push({
                fullName: faker.name.firstName() + " " + faker.name.lastName(),
                email: faker.internet.email(),
                productName: faker.commerce.productName(),
                createdAt: faker.date.past(2)
            })
        }
        SetProductData(tempArray)
    }, [])

    return (
        <div className="products">
            <h5>Product Details</h5>
            <Table columns={[
                {
                    title: 'FullName',
                    dataIndex: 'fullName',
                    key: 'fullName',
                },
                {
                    title: 'Email',
                    dataIndex: 'email',
                    key: 'email',
                },
                {
                    title: 'ProductName',
                    dataIndex: 'productName',
                    key: 'productName',
                },
                {
                    title: 'CreatedAt',
                    dataIndex: 'createdAt',
                    key: 'createdAt',
                    render: (date) =>
                        moment(date).format('DD MMMM YYYY hh:mm A')
                },
                {
                    title: 'Action',
                    key: 'action',
                    render: (data) => (
                        <Space size="middle">
                            <NavLink
                                to={{
                                    pathname: '/cart-details',
                                    state: data
                                }}>
                                Show Details
                            </NavLink>
                        </Space>
                    ),
                },
            ]}
                dataSource={productData} />
        </div>
    )
}

export default ProductList