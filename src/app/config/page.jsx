import Header from "@/components/Header"
import Sidebar from "@/components/Sidebar"
import PageTitle from "@/components/PageTitle"
import GridCard from "@/components/GridCard"
import Message from "@/components/Message"

const page = () => {
    return (
        <>
            <div className="min-vh-100 d-flex flex-column bg-body-tertiary">
                <Header statusType="success" statusText="App Running"/>  
                <div className="d-flex flex-grow-1">
                    <Sidebar/>
                    <div className="d-flex flex-column flex-grow-1">
                        <PageTitle title="System Configuration" return="/"/>
                        <div className="flex-grow-1">
                            {/* <Message type="success" text="Your request was successfully processed." show="true"/> */}
                            <div className="px-3 py-3">
                                {/* <h4 className="fw-light text-center mb-3 mt-2">Aiden O'Neal</h4> */}
                                <div className="d-flex gap-3">
                                    <GridCard title="Internal Users" text="Manage internal system users and assign application-specific permission rules." link="/config/users/internal" target="_self" cta="Manage"/>
                                    <GridCard title="External Users" text="Manage external business users who can access the B2B portal." link="/config/users/external" target="_self" cta="Manage"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default page