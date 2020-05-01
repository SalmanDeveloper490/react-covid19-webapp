import React from "react";

const Message = () => {
    return(
        <div className="alert alert-dark alert-dismissible fade show mb-0" role="alert">
            <h3 className="text-center lobster"><strong>STAY HOME STAY SAFE</strong></h3>
            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
    )

}

export default Message;