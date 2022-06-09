# Bad Path Table
#### All paths here should return either 404 or 400

## `/api/v1/guilds` - `404` Not found.
```json
{
	"error": "No Guild Provided",
	"code": 404,
	"http_error": "NOT_FOUND"
}
```

## `/api/v1/guilds/{guild-id}` - `404` Not found. (\*1)
```json
{
	"error": "Path in guild not provided",
	"code": 404,
	"http_error": "NOT_FOUND"
}
```

# EXCEPTIONS
## \*1:
### DELETE REQUESTS TO THE ENDPOINT `/api/v1/guilds/{guild-id}/` MUST MAKE THE BOT LEAVE THE SERVER. REQUIRES AN AUTHORISATION HEADER WITH ONE OF THE FOLLOWING CERTS:
- BOT_ADMINISTRATOR
- BOT_MANAGER
- BOT_DEVELOPER
- SERVER_OWNER_{guild-id}
- BTMC