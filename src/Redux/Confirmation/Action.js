const Loading = () => { return { type : "REQ-CASHOUT" } }

const Success = () => { return { type : "REQ-SUCCESS"} }

const Failure = () => { return { type : "REQ-FAILURE" } }

const ResetReq = () => { return { type : "RESET-REQ" } }

export {Loading , Success , Failure , ResetReq}