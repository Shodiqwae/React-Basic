type ProfileCardProps = {
    name?: string;
    age: number;
    job?: string;
}

function ProfileCard(props: ProfileCardProps) {
    const { name = "user", age, job } = props

    return (
        <div className="card">
            <p>Name : {name}</p>
            <p>Age  : {age}</p>
            {job && <p>job  : {job}</p> }
        </div>
    )
}

export default ProfileCard;