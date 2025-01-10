<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\MailEmailSender;
use Illuminate\Support\Facades\DB;

use Illuminate\Support\Facades\Redirect;
use Carbon\Carbon;
use Illuminate\Support\Facades\Crypt;
// use Illuminate\Support\Facades\View;

class SendEmailController extends Controller
{
    // NOTE - MailEmailSender data,subject,view
    public function send_email(Request $request)
    {
        $count = DB::connection('HPM')
            ->table('EmailHistory')
            ->where('ControlNo', $request->ControlNo)
            ->count() + 1;

        if ($count > 3) {
            return response()->json(['error' => "The $request->ControlNo have been too many emails sent, with three already."]);
        }

        DB::connection('HPM')
            ->table('EmailHistory')
            ->insert([
                'ControlNo' => $request->ControlNo,
                'SeqNo' => $count,
                'EmailDate' => Carbon::now()->format('Y/m/d H:i:s'),
                'Updatedby' => $request->EmailSender,
            ]);
        $encrypted = Crypt::encryptString($request->ControlNo);

        $data1['site'] = "http://10.169.142.40/hpm/api/click_approved_in_email?SecretKey=" . urlencode($encrypted);
        $data1['control'] = $request->ControlNo;
        // ->cc("fdzplnovvn@exelica.com")
        Mail::to("smd_isd@hrd-s.com")
        // Mail::to("kefupdpglu@diginey.com")
            ->send(new MailEmailSender($data1, 'Hazard Patrol - New Record', 'emailTemplate.hpm'));

        if (Mail::failures()) {
            return view('emailTemplate.emailError');
        }

        return response()->json(['success' => "The $request->ControlNo, Email is successfully sent !"]);
    }

    public function send_email_query()
    {

        $data = DB::connection('HPM')
            ->table('HazardPatrolMonitoring')
            ->wherenull('ConfirmedDate')
            ->wherenull('DeletedDate')
            ->where('CreatedDate', '>', '2023-05-01 00:00:00')
            ->get();
        foreach ($data as $obj) {
            $daysAgo = Carbon::now()->diffInDays(Carbon::parse($obj->CreatedDate));

            if ($daysAgo == 5 || $daysAgo == 10 || $daysAgo == 12) {


                $count = DB::connection('HPM')
                    ->table('EmailHistory')
                    ->where('ControlNo', $obj->ControlNo)
                    ->count() + 1;

                if ($count > 3) {
                    continue;
                }

                DB::connection('HPM')
                    ->table('EmailHistory')
                    ->insert([
                        'ControlNo' => $obj->ControlNo,
                        'SeqNo' => $count,
                        'EmailDate' => Carbon::now()->format('Y/m/d H:i:s'),
                        'Updatedby' => '33993',
                    ]);

                $encrypted = Crypt::encryptString($obj->ControlNo);

                $data1['site'] = "http://10.169.142.40/hpm/api/click_approved_in_email?SecretKey=" . urlencode($encrypted);
                $data1['control'] = $obj->ControlNo;
                // Mail::to("smd_isd@hrd-s.com")
                Mail::to("smd_isd@hrd-s.com")
                    ->send(new MailEmailSender($data1, 'Hazard Patrol - Follow up', 'emailTemplate.hpm'));

                if (Mail::failures()) {
                    return view('emailTemplate.emailError');
                }
            } // end if 5,10,12 days
        }

        return 'good';
    }

    public function click_approved_in_email(Request $request)
    {
        // return $request;
        $decrypted = Crypt::decryptString($request->SecretKey);
        DB::connection('HPM')
            ->table('HazardPatrolMonitoring')
            ->where('ControlNo', '=', $decrypted)
            ->update([
                'ConfirmedDate' => Carbon::now()
            ]);
        return Redirect::to('/HazardPatrolMonitoring');
    }
}
