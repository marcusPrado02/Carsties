using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace AuctionService.Data.Migrations
{
    /// <inheritdoc />
    public partial class UpdateItems : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "ImageUrl",
                table: "Items",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<int>(
                name: "Mileage",
                table: "Items",
                type: "integer",
                nullable: false,
                defaultValue: 0);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ImageUrl",
                table: "Items");

            migrationBuilder.DropColumn(
                name: "Mileage",
                table: "Items");
        }
    }
}
