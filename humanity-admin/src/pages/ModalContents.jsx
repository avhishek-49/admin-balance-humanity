import React from 'react'

const ModalContents = ({ viweData }) => {

    // const viweData = {
    //     "status": 200,
    //     "message": "successfully fetched",
    //     "customerkycData": {
    //         "id": 1,
    //         "uuid": "36ca87b3-9e58-468c-b1f2-f43b08a9164b",
    //         "address": "test",
    //         "citizenship_number": "fdfdfdf",
    //         "relationship": "null",
    //         "mobile_number": "9862383579",
    //         "description_of_victim": "dfgdfg",
    //         "account_number": "gdgdgd",
    //         "account_name": "gdgd",
    //         "proof_image": "http://127.0.0.1:9000/imageshumanity/295e8549-c11e-48e5-83a6-f653a0b8a6da.png",
    //         "is_verified": 0,
    //         "created_at": 1710510043199,
    //         "updated_at": null
    //     }
    // }

    const formattedData = viweData?.customerkycData

    return (
        <>
            <div className='px-6 py-4 space-y-2'>

                {/* Customer Name", "Address", "Citizenship Number", "Account Number", "Description", "Mobile Number" */}
                <div className='flex justify-between items-start gap-3'>
                    <div className='font-medium w-1/2'>Address:</div>
                    <div className='w-1/2'>{formattedData.address}</div>
                </div>
                <div className='flex justify-between items-start gap-3'>
                    <div className='font-medium w-1/2'>Citizenship Number:</div>
                    <div className='w-1/2'>{formattedData.citizenship_number}</div>
                </div>
                <div className='flex justify-between items-start gap-3'>
                    <div className='font-medium w-1/2'>Account Number:</div>
                    <div className='w-1/2'>{formattedData.account_number}</div>
                </div>
                <div className='flex justify-between items-start gap-3'>
                    <div className='font-medium w-1/2'>Description:</div>
                    <div className='w-1/2'>{formattedData.description_of_victim}</div>
                </div>
                <div className='flex justify-between items-start gap-3'>
                    <div className='font-medium w-1/2'>Mobile Number:</div>
                    <div className='w-1/2'>{formattedData.mobile_number}</div>
                </div>
                <div className='flex justify-between items-start gap-3'>
                    <div className='font-medium w-1/2'>Image:</div>
                    <div className='w-1/2'>
                        <div className='w-40'>
                            <img src={formattedData.proof_image} className='w-full h-full' alt="" />
                        </div>
                    </div>
                </div>

            </div>

            {/* {Object.entries(formattedData).map(([key, value]) => (
                    <div key={key} className='flex justify-between items-start'>
                        {key === 'proof_image' && value.startsWith('http') ? (
                            <img src={value} alt={key} />
                        ) : (
                            <div>{key.toUpperCase()}: {value}</div>
                        )}
                    </div>
                ))} */}
        </>
    )
}

export default ModalContents