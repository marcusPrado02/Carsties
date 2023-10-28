using AutoMapper;
using Contracts;

namespace SearchService;

public class MappingProfiles : Profile
{
    protected MappingProfiles()
    {
        CreateMap<AuctionCreated, Item>();
    }
}
