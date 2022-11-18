create PROCEDURE upUser_Update (
    @FireBaseID varchar(128),
    @UserEmail varchar(255),
    @DateCreated datetime
)

language sql

as $$
UPDATE User SET User_Email = @UserEmail, Date_Created = @DateCreated WHERE Firebase_User_Id = @FireBaseID;
$$;