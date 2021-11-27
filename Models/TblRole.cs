using System;
using System.Collections.Generic;

namespace FinalMachineTest.Models
{
    public partial class TblRole
    {
        public TblRole()
        {
            TblUser = new HashSet<TblUser>();
        }

        public int RoleId { get; set; }
        public string RoleName { get; set; }

        public virtual ICollection<TblUser> TblUser { get; set; }
    }
}
