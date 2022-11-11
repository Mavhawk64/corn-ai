create PROCEDURE upUser_Update (
    @FireBaseID varchar(128),
    @Email varchar(255),
    @DateCreated datetime
)

language sql

as $$
UPDATE User SET User_Email = @Email, Date_Created = @DateCreated WHERE Firebase_User_Id = @FireBaseID;
$$;