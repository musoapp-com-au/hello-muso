#!/bin/bash
set -e;

# Create non root role
API_USER_ROLE="${API_USER_ROLE:-readWrite}"

if [ -n "${API_DB_USER:-}" ] && [ -n "${API_DB_PASSWORD:-}" ]; then
	"${mongo[@]}" "$SONGS_DB_NAME" <<-EOJS
		db.createUser({
			user: $(_js_escape "$API_DB_USER"),
			pwd: $(_js_escape "$API_DB_PASSWORD"),
			roles: [ { role: $(_js_escape "$API_USER_ROLE"), db: $(_js_escape "$MONGO_INITDB_DATABASE") } ]
			})
	EOJS
fi