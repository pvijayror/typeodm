import {Document} from "../../../src/annotation/Document";
import {Field} from "../../../src/annotation/Field";
import {RelationWithOne} from "../../../src/annotation/RelationWithOne";
import {RelationWithMany} from "../../../src/annotation/RelationWithMany";
import {IdField} from "../../../src/annotation/IdField";
import {ArrayField} from "../../../src/annotation/ArrayField";

@Document()
export class Post {

    @IdField(true)
    id: string;

    @Field('title_name')
    title: string;

    @Field('text_content')
    text: string;

}