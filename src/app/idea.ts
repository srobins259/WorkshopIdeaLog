import { Like } from "./like";
import { User } from "./user";

export interface Idea {
    id: number;
    title: string;
    description: string;
    uid: string;
    likeCount: number;
    created: Date;
    modified: Date;
    likes?: Like[];
    user?: User;
}
