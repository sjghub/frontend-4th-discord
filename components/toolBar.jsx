import {Tool} from "@/components/tool";

export function ToolBar(){
    return (
        <div className={"flex"}>
            <Tool
                src={"/assets/invite-group-message.svg"}
                alt={"새로운 그룹 메시지"}
            />
            <Tool
                src={"/assets/invite-group-message.svg"}
                alt={"받은 편지함"}
            />
            <Tool src={"/assets/icons8-help-32.png"} alt={"도움말"} />
        </div>
    )
}