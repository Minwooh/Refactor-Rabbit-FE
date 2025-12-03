import styled from "styled-components";
import Image from "next/image";

interface MyDataType {
    name: string;
    src?: string;
}

function Profile({ name, src }: MyDataType) {
    const fallback = "/images/personal/shared/basic_profile.png";

    return (
        <Div>
            <MyImg
                src={fallback}
                width={50}
                height={50}
                alt="나의 이미지"
                quality={70}
            />
            <MyName>{name}</MyName>
        </Div>
    );
}

const Div = styled.div`
    width: 100%;
    height: 6.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
`;

const MyImg = styled(Image)`
    border-radius: 12px;
    object-fit: cover;
`;
const MyName = styled.div`
    font-family: var(--font-nanum-square);
    font-weight: 900;
    font-size: 13px;
`;

export default Profile;
