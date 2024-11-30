import { getUser } from "@/backend/actions/user/get-user";

import EditProfileDialog from "@/components/EditProfileDialog/EditProfileDialog";
import ProfileImage from "@/components/ProfileImage/ProfileImage";
import ProfileInfo from "@/components/ProfileInfo/ProfileInfo";
import { Progress } from "@/components/ui/progress";

import { CrownSimple } from "@phosphor-icons/react/dist/ssr/CrownSimple";
import { Plan } from "@prisma/client";
import Link from "next/link";

const Profile = async () => {
  const {
    name,
    email,
    createdAt,
    nickname,
    subscription,
    profileImage,
    transactionCounter,
  } = await getUser();

  const percentage = (transactionCounter / 50) * 100;

  return (
    <main className="flex h-full w-full flex-col items-center justify-start py-10">
      <section className="flex w-[60%] flex-col items-center justify-center rounded-md">
        <div className="h-[6rem] w-full rounded-t-md bg-gradient-to-r from-purple-800/15 via-purple-900/80 to-purple-800/15" />
        <section className="flex w-full flex-col items-center justify-center rounded-b-md bg-[#0d091f] px-16">
          <section className="flex w-[95%] items-center justify-center">
            <div className="my-8 flex w-[90%] items-center justify-center">
              <div className="m-4">
                <ProfileImage profileImage={profileImage} />
              </div>
              <div className="flex w-full items-center justify-between">
                <div>
                  <div className="flex items-center justify-start">
                    <h2 className="mb-[4px] mr-2 text-2xl font-bold">{name}</h2>
                    {subscription === Plan.PREMIUM && (
                      <CrownSimple color="orange" weight="fill" size={18} />
                    )}
                  </div>
                  <h2 className="text-lg text-muted-foreground">{email}</h2>
                </div>
                <div className="mr-4">
                  <EditProfileDialog
                    name={name}
                    nickname={nickname}
                    email={email}
                  />
                </div>
              </div>
            </div>
          </section>
          <ProfileInfo
            name={name}
            nickname={nickname}
            email={email}
            createdAt={createdAt}
            subscription={subscription}
            transactionPercentage={percentage}
          />
          <footer className="my-8 flex w-[90%] items-end justify-between border-t-[1px] p-8">
            <div className="w-[50%]">
              <div className="mb-2 flex items-center justify-between">
                <h2 className="font-semibold">Transações</h2>
                <h2 className="font-semibold">{transactionCounter}/50</h2>
              </div>
              <Progress className="text-muted" value={percentage} />
            </div>
            <div className="flex items-center justify-center">
              <h2>Não quer limite de transações?</h2>
              <Link
                href="/subscription"
                className="ml-4 font-semibold text-emerald-600 hover:text-emerald-700"
              >
                Fazer upgrade!
              </Link>
            </div>
          </footer>
        </section>
      </section>
    </main>
  );
};

export default Profile;
