import React from 'react';

const DisplayCustomerService = ({ service, i }) => {
    const { name, serviceName, description, email, status } = service;
    return (
        <tr>
            <td>{name}</td>
            <td>{email}</td>
            <td>{serviceName}</td>
            <td>{description}</td>
            <td className="pl-3">{status}</td>
        </tr>
    );
};

export default DisplayCustomerService;