create PROCEDURE upUser_Delete (
    @FireBaseID varchar(128)
)

language sql

as $$
DELETE FROM User WHERE Firebase_User_Id = @FireBaseID;
$$;