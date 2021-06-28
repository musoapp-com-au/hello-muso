#/bin/bash
printf '%s' "Database to Create: "
read dbName
printf '%s' "DB User to create: "
read dbUser
printf "Password for %s: " $dbUser
read dbPassword


printf "DATABASE_URL=mongodb://%s:%s@muso-data:37019/?authSource=%s\nSONGS_DB_NAME=%s\nAPI_DB_USER=%s\nAPI_DB_PASSWORD=%s\n" $dbUser $dbPassword $dbName $dbName $dbUser $dbPassword >> .env

