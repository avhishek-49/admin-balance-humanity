import Table from '../components/Table/Table'
import Overlay from '../components/Overlay/Overlay'
import Modal from '../components/Modal/Modal'
import ModalContents from './ModalContents'
import { FaCheck } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { FaEye } from "react-icons/fa";
import { useEffect, useState } from 'react';
import axios from 'axios';



const Home = () => {

    const [tableResponse, setTableRespon] = useState({})
    useEffect(() => {
        const apiCall = async () => {
            // const res = await axios.get("https://jsonplaceholder.typicode.com/todos/1")
            try {
                const res = await axios.get("http://localhost:4900/api/v1/customer/get-customer-kyc")
                setTableRespon(res.data)

            } catch (error) {
                console.log(error)
            }
        }

        apiCall()
    }, [])

    // http://localhost:4900/api/v1/customer/get-customer-kyc
    // const tableResponse = {
    //     "message": [
    //         {
    //             "uuid": "ba688a21-8b9f-4ea0-98cc-8c83bdefd1f4",
    //             "address": "test",
    //             "citizenship_number": "fdfdfdf",
    //             "relationship": "null",
    //             "mobile_number": "9862383579",
    //             "description_of_victim": "dfgdfg",
    //             "account_number": "gdgdgd",
    //             "account_name": "gdgd",
    //             "is_verified": 0
    //         },
    //         {
    //             "uuid": "36ca87b3-9e58-468c-b1f2-f43b08a9164b",
    //             "address": "test",
    //             "citizenship_number": "fdfdfdf",
    //             "relationship": "null",
    //             "mobile_number": "9862383579",
    //             "description_of_victim": "dfgdfg",
    //             "account_number": "gdgdgd",
    //             "account_name": "gdgd",
    //             "is_verified": 0
    //         }
    //     ]
    // }


    const [showView, setshowView] = useState(false)

    const [viweData, setViweData] = useState({})

    const handleView = async (id) => {

        // after clicking view, call the api and send the data in the ModalComponents.
        try {
            const res = await axios.get(`http://localhost:4900/api/v1/post/get-kyc-customers/:${id}`)
            // http://localhost:4900/api/v1/post/get-kyc-customers/:uuid
            setViweData(res?.data)
        } catch (error) {
            console.log(error)
        }

        setshowView(true)
    }


    const handleClick = async (uuid, status) => {

        try {
            await axios.post("http://localhost:4900/api/v1/post/approve-reject-kyc", {
                customerId: uuid,
                status: status,
                remarks: "test"
            })
        } catch (error) {
            console.log(error)
        }
        // http://localhost:4900/api/v1/post/approve-reject-kyc

    }

    const tableData = tableResponse?.message?.map(ticket => {
        const {
            uuid,
            account_name,
            account_number,
            address,
            citizenship_number,
            description_of_victim,
            mobile_number,
        } = ticket;
        // const costDisplay = (cost === 0) ? "Free" : cost;

        const actions = <div className='flex items-center justify-start gap-1'>
            <button
                onClick={() => handleClick(uuid, 1)}
                className='rounded-md p-2 bg-green-500'
            >
                <FaCheck className='text-white' />
            </button>

            <button
                onClick={() => handleClick(uuid, 0)}
                className='rounded-md p-2 bg-red-500'
            >
                <IoMdClose className='text-white' />
            </button>

            <button
                onClick={() => handleView(uuid)}
                className='rounded-md p-2 bg-blue-800'
            >
                <FaEye className='text-white' />
            </button>
        </div>

        return [
            account_name,
            address,
            citizenship_number,
            account_number,
            description_of_victim,
            mobile_number,
            actions
        ];
    });

    return (
        <>
            <div className='p-4 space-y-4'>
                <h1 className='text-4xl font-semibold w-full '>Balanced Humanity Admin</h1>



                <div>
                    <Table
                        headItems={["Customer Name", "Address", "Citizenship Number", "Account Number", "Description", "Mobile Number", "Actions"]}
                        bodyItems={tableData}
                        colWidth={["w-fit", "w-fit", "w-fit", "w-fit", "w-fit", "w-fit", "w-fit"]}
                        mainCss={""}
                    />
                </div>
            </div>

            {showView &&
                <Modal
                    title={"Your Profile"}
                    contents={<ModalContents viweData={viweData} />}
                    openModal={() => setshowView(false)}
                />
            }

            {showView && (
                <Overlay onClick={() => setshowView(false)} />
            )}
        </>
    )
}

export default Home