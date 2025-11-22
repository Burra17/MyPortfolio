var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

// Säger åt servern att leta efter index.html
app.UseDefaultFiles();

// Säger åt servern att det är okej att visa filer från wwwroot-mappen
app.UseStaticFiles();

app.Run();