create PROCEDURE upHistory_Insert (
    @FireBaseId varchar(128),
    @Image_Url varchar(MAX),
    @Is_Sick_Choice BOOLEAN
)

language sql

as $$
insert into History (Firebase_User_Id, Image_Url, Is_Sick_Choice, Date_Completed) values (@FireBaseId, @Image_Url, @Is_Sick_Choice, now());
$$;