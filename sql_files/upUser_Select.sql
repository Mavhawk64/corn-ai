create PROCEDURE upUser_Select (
    @FireBaseID varchar(128)
)

language sql
as $$
SELECT * FROM User WHERE Firebase_User_Id = @FireBaseID;
$$;