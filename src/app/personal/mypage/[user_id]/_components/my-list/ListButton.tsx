import styled from "styled-components";
import Image from "next/image";
import {
    handleEnterBackground,
    handleLeaveBackground,
} from "../../_utils/mouse";

interface ListButtonProps {
    onGetList: () => void;
    totalLength: number;
    content: string;
}

function ListButton({ onGetList, totalLength, content }: ListButtonProps) {
    return (
        <Div>
            <Main
                onMouseEnter={(e) =>
                    handleEnterBackground(
                        { backgroundColor: "#2f2f2f73", color: "#fff" },
                        e
                    )
                }
                onMouseLeave={handleLeaveBackground}
                onClick={onGetList}
            >
                <BgImage
                    src="/images/personal/shared/space.jpeg"
                    alt=""
                    fill
                    priority
                    $content={content}
                />
                <span>총</span>
                <TotalLength>{totalLength}</TotalLength>
                <span>건</span>
                <div>{content}</div>
            </Main>
        </Div>
    );
}

const Div = styled.div`
    width: 100%;
    height: 100%;
`;

const Main = styled.div`
    position: relative;
    padding: 1rem;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    box-shadow: 4px 4px 4px 0 rgba(0, 0, 0, 0.25);

    font-weight: 800;
    color: #fff;
    cursor: pointer;
`;

const BgImage = styled(Image)<{ $content: string }>`
    object-fit: cover;
    object-position: ${({ $content }) =>
        $content === "거래 기록 보기" ? "right bottom" : "center"};
    z-index: -1;
`;

const TotalLength = styled.span`
    color: #fcd676;
    font-weight: 900;
`;

export default ListButton;
