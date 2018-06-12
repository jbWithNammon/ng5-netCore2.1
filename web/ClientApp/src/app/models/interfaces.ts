export interface IMenu {
    Link?: string;
    Class?: string;
    Display?: string;
    Sequence?: number;
    MenuId?: number
}

export interface IConfig {
    ApiEndpoint?: string;
    AppLanguage?: string;
    AppIdle?: IAppIdle;
    ApiPhoto?: string;
}

export interface IAppIdle {
    Idle?: number;
    TimeOut?: number;
    Ping?: number;
}

export interface IUser {
    UserName?: string;
    Password?: string;
    UserInfo?: IUserInfo;
}

export interface IUserInfo {
    FullName?: string;
    Position?: string;
    DivDeptSect?: string;
}

export interface IConfiguration {
    apiEndPoint?: string;
    languageIndex?: string;
}

export interface IFileContent {
    FileName?: string;
    Value?: any;
}

export interface ISearchParameter {
    ConditionList?: ISearchCondition[];
    SortTable?: string;
    SortColumn?: string;
    SortAscending?: boolean;
    Page?: number;
    ItemsPerPage?: number;
}
export interface ISearchCondition {
    TableName?: string;
    FieldName?: string;
    ParameterName?: string;
    Value?: string;
    ListValue?: string[];
    OperatorType?: string;
    JoinerType?: string;
    LikePosition?: string;
    GroupId?: number;
}

export interface ICategoryMangementModel {
    ID?: string;
    Name_L1?: string;
    Name_L2?: string;
    Name_L3?: string;
    Name_L4?: string;
    Description_L1?: string;
    Description_L2?: string;
    Description_L3?: string;
    Description_L4?: string;
    EffDate?: string;
    EffDateShow?: string;
    ExpDate?: string;
    ExpDateShow?: string;
    Priority?: string;
    Icon?: string;
    CreateBy?: string;
    CreateDate?: string;
    UpdateBy?: string;
    UpdateDate?: string;
}
export interface ICourse{
    ID?: string;
    CategoryID?: number;
    CourseLocationID?: number;
    CourseTypeID?: number;
    Name_L1?: string;
    Name_L2?: string;
    Name_L3?: string;
    Name_L4?: string;
    Name_Display?: string;
    Object_L1?: string;
    Object_L2?: string;
    Object_L3?: string;
    Object_L4?: string;
    Intro_L1?: string;
    Intro_L2?: string;
    Intro_L3?: string;
    Intro_L4?: string;
    Target_L1?: string;
    Target_L2?: string;
    Target_L3?: string;
    Target_L4?: string;
    Criteria_L1?: string;
    Criteria_L2?: string;
    Criteria_L3?: string;
    Criteria_L4?: string;
    Previous?: number;
    EffDate?: string;
    ExpDate?: string;
    CreateBy?: number;
    CreateDate?: string;
    UpdateBy?: number;
    UpdateDate?: string;
    EmpMaster?: IEmployee;
    CatMaster?: ICategoryMangementModel;
    TotalTopic?: string;
}

export interface ICourseList{
    ID?: string;
    CouseID?: string;
    TopicSeq?: string;
    TopicName_L1?: string;
    TopicName_L2?: string;
    TopicName_L3?: string;
    TopicName_L4?: string;
    ContentID?: string;
    MediaTypeID?: string;
    ExamTypeID?: string;
    IsActive?: string;
    CreateBy?: string;
    CreateDate?: string;
    UpdateBy?: string;
    UpdateDate?: string;
    ContentMaster?: IContentType;
    TotalTopic?: string;
}

export interface IMediaType{
    ID?: string;
    Name_L1?: string;
    Name_L2?: string;
    Name_L3?: string;
    Name_L4?: string;
    IsActive?: string;
}

export interface IExaminationModel {
    ID?: string;
    Title_L1?: string;
    Title_L2?: string;
    Title_L3?: string;
    Title_L4?: string;
    TopicName_L1?: string;
    TopicName_L2?: string;
    TopicName_L3?: string;
    TopicNmae_L4?: string;
    Name_L1?: string;
    Name_L2?: string;
    Name_L3?: string;
    Name_L4?: string;
    ExamTypeID?: string;
    CourseListID?: string;
    CreateBy?: string;
    CreateDate?: string;
    UpdateBy?: string;
    UpdateDate?: string;
    QuestionQty?: string;
    Score?: string;
}

export interface IContentType{
    ID?: string;
    Name_L1?: string;
    Name_L2?: string;
    Name_L3?: string;
    Name_L4?: string;
    IsActive?: string;
}

export interface IEmployee{
    ID?: string;
    EmpCode?: string;
    FirstName_L1?: string;
    FirstName_L2?: string;
    FirstName_L3?: string;
    FirstName_L4?: string;
    LastName_L1?: string;
    LastName_L2?: string;
    LastName_L3?: string;
    LastName_L4?: string;
    DeptID?: string;
    DivID?: string;
    PositionID?: string;
    Email?: string;
    Contact?: string;
    StartWorkDate?: string;
    IsActive?: string;
    CreateBy?: string;
    CreateDate?: string;
    UpdateBy?: string;
    UpdateDate?: string;
    Department?: IDepartment;
    Division?: IDivision;
    Position?: IPosition;
}
export interface IDepartment{
    ID?: string;
    Name_L1?: string;
    Name_L2?: string;
    Name_L3?: string;
    Name_L4?: string;
    IsActive?: string;
    CreateBy?: string;
    CreateDate?: string;
    UpdateBy?: string;
    UpdateDate?: string;
}
export interface IDivision{
    ID?: string;
    DeptID?: string;
    Name_L1?: string;
    Name_L2?: string;
    Name_L3?: string;
    Name_L4?: string;
    IsActive?: string;
    CreateBy?: string;
    CreateDate?: string;
    UpdateBy?: string;
    UpdateDate?: string;
}
export interface IPosition{
    PostionID?: string;
    DivID?: string;
    Name_L1?: string;
    Name_L2?: string;
    Name_L3?: string;
    Name_L4?: string;
    IsActive?: string;
    CreateBy?: string;
    CreateDate?: string;
    UpdateBy?: string;
    UpdateDate?: string;
}
export interface IWorkExperience{
    ID?: string;
    Name_L1?: string;
    Name_L2?: string;
    Name_L3?: string;
    Name_L4?: string;
    TimeStart?: string;
    TimeStartUnit?: string;
    TimeEnd?: string;
    IsActive?: string;
    CreateBy?: string;
    CreateDate?: string;
    UpdateBy?: string;
    UpdateDate?: string;
}

export interface IUserManagement{
    EmpCode?: string;
    Name_L1?: string;
    Name_L2?: string;
    Name_L3?: string;
    Name_L4?: string;
}

export interface IPositionList{
    ID?: string;
    Position_L1?: string;
    Position_L2?: string;
    Position_L3?: string;
    Position_L4?: string;
}
