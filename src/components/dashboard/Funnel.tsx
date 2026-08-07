export default function Funnel() {

    const steps=[
        ["Reached","186K"],
        ["Clicked","19K"],
        ["Visited","7.2K"],
        ["Registered","742"],
        ["Confirmed","621"]
    ]

    return(

        <div className="rounded-2xl bg-white border border-[#E8DDC8] p-6 shadow-sm">

            <h2 className="font-bold text-xl">
                Registration Funnel
            </h2>

            <div className="mt-6 space-y-5">

                {steps.map(([name,value])=>(

                    <div key={name}>

                        <div className="flex justify-between">

                            <span>{name}</span>

                            <strong>{value}</strong>

                        </div>

                        <div className="mt-2 h-2 rounded-full bg-gray-200">

                            <div
                                className="h-2 rounded-full bg-[#17462F]"
                                style={{
                                    width:
                                        name==="Reached"?"100%":
                                        name==="Clicked"?"75%":
                                        name==="Visited"?"55%":
                                        name==="Registered"?"35%":"25%"
                                }}
                            />

                        </div>

                    </div>

                ))}

            </div>

        </div>

    )

}