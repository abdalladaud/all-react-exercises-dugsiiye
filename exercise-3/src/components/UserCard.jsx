// React Exercise #1

const UserCard = ({ Username, email }) => {
    return (
        <>
            <h1>{Username}</h1>
            <p>{email}</p>
        </>
    )
}

export default UserCard;