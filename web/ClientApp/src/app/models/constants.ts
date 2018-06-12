export const menu = [
    {
        Link: "/Home", Class: "fa fa-camera-retro",
        Display: "Home", Sequence: 1, ModuleId: 1
    },
    {
        Link: "/Other", Class: "fa fa-truck",
        Display: "Other", Sequence: 2, ModuleId: 1
    },
    {
        Link: "/CourseManagement", Class: "fa fa-truck",
        Display: "Course Management", Sequence: 2, ModuleId: 1
    },
    {
        Link: "/CategoryManagement", Class: "fa fa-truck",
        Display: "Category Management", Sequence: 2, ModuleId: 1
    },
    {
        Link: "/base64", Class: "fa fa-truck",
        Display: "Base64", Sequence: 2, ModuleId: 1
    }
];
export enum OperatorType {
    Like = "LIKE",
    Equal = "=",
    NotEqual = "<>",
    GreaterEqual = ">=",
    LessEqual = "<=",
    In = "IN",
    NotIn = "NOT IN",
    Is = "IS",
    GreaterThan = ">",
    LessThan = "<"
}
export enum JoinerType {
    And = "AND",
    Or = "OR",
    Not = "NOT"
}

export enum LikePositionType {
    BeginWords = "%{0}",
    EndWords = "{0}%",
    AroundWords = "%{0}%",
    AllWords = "%%"
}

export enum Language {
    First = "1",
    Second = "2",
    Third = "3",
    Fourth = "4"
}