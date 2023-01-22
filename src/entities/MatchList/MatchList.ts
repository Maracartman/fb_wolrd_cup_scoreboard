import { Match } from "../Match/Match";



class MatchList {
    private _head?: MatchNode | null;

    public get head(): MatchNode | null | undefined {
        return this._head;
    }

    public insert = (match: Match): MatchNode => {
            const node: MatchNode = {
                match,
                next: null
            }
            if(!this._head){
                this._head = node
                return this._head
            } else {
                if(node.match.totalScore >= this._head.match.totalScore){
                    const currentHead = this._head
                    node.next = currentHead
                    this._head = node
                    return this._head
                } else {
                    const insertNodeDesc = (theMatchNode: MatchNode, matchNode: MatchNode | null, prevNode: MatchNode): MatchNode => {
                    if(matchNode == null){
                        matchNode = theMatchNode
                        prevNode.next = matchNode
                        return matchNode
                    }  
                    if(theMatchNode.match.totalScore >= matchNode.match.totalScore){
                        theMatchNode.next = matchNode
                        prevNode.next = theMatchNode
                        return theMatchNode
                    }
                    return insertNodeDesc(theMatchNode,matchNode.next,matchNode)
                }
                return insertNodeDesc(node,this._head.next, this._head)
                }
                
            }
        }
}

type MatchNode = {
    match: Match,
    next: MatchNode | null
}

export default MatchList