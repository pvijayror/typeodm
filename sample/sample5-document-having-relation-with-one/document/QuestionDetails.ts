import {Document} from "../../../src/decorator/Document";
import {Field} from "../../../src/decorator/Field";
import {RelationWithOne} from "../../../src/decorator/RelationWithOne";
import {RelationWithMany} from "../../../src/decorator/RelationWithMany";
import {ObjectIdField} from "../../../src/decorator/ObjectIdField";
import {ArrayField} from "../../../src/decorator/ArrayField";

@Document()
export class QuestionDetails {

    @ObjectIdField()
    id: string;

    @Field()
    createTime: number;

    @Field()
    updateTime: number;

    @Field()
    searchKeywords: string;

    @Field()
    searchDescription: string;

}