create PROCEDURE upHistory_Update (
    @History_Id int,
    @FireBaseId varchar(128),
    @Image_Url varchar(MAX),
    @Is_Sick_Choice BOOLEAN,
    @Is_Sick_Actual BOOLEAN,
    @Is_Sick_AI BOOLEAN
)

language sql

as $$
update History set Firebase_User_Id = @FireBaseId, Image_Url = @Image_Url, Is_Sick_Choice = ISNULL(@Is_Sick_Choice,Is_Sick_Choice), Is_Sick_Actual = ISNULL(@Is_Sick_Actual,Is_Sick_Actual), Is_Sick_AI = ISNULL(@Is_Sick_AI,Is_Sick_AI) where History_Id = @History_Id;
$$;