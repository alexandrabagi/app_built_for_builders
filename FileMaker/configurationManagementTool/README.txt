As extension to the SaaS I have been working on a configuration management tool for our internal processes. It will first off all be a server monitoring tool but will also handle new customer deployments, new development iterations, version control and update patching. 

To do this I have worked with FileMaker's Data API to get file specific data and FileMaker's Admin API to get server status and perform remote system batch schedules for file cloning, renaming, movement and update patching via FileMaker's Data Migration CLI Tool.

It might seem overkill but it is an essential strategy in my start-up to include scalability and easy deployment from the start to save configuration time in the future.

Links:
- Data API: https://cloud.protabase.com/fmi/data/apidoc/
- Admin API: https://cloud.protabase.com/fmi/admin/apidoc/
