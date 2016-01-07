import {Author} from "./Author";
import {Document} from "../../../src/decorator/Document";
import {Field, GeneratedIdField} from "../../../src/decorator/Field";
import {RelationWithOne} from "../../../src/decorator/Relation";

@Document('sample10-post')
export class Post {

    @GeneratedIdField()
    id: string;

    @Field()
    title: string;

    @Field()
    text: string;

    @RelationWithOne<Author>('authorId', type => Author, author => author.posts, {
        cascadeInsert: true
    })
    author: Author;

    @Field()
    authorId: string;

}