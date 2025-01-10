<!DOCTYPE html>
<html>

<head>
    <title>Confirm Email</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f5f5f5;
        }

        .container {
            margin: 50px auto;
            max-width: 500px;
            text-align: center;
            padding: 30px;
            background-color: #fff;
            border-radius: 5px;
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
        }

        h1 {
            font-size: 28px;
            color: #333;
        }

        p {
            font-size: 18px;
            line-height: 1.5;
            color: #666;
            margin-bottom: 20px;
        }

        .button {
            display: inline-block;
            background-color: #4CAF50;
            color: #fff;
            border-radius: 5px;
            padding: 12px 24px;
            text-decoration: none;
            transition: background-color 0.3s ease-in-out;
        }

        .button:hover {
            background-color: #3e8e41;
        }
    </style>
</head>

<body>
    <div class="container">
        <h2>{{ $control }}</h2>
        <h1>Please confirm the findings!</h1>
        <p>We have sent you an email with a confirmation link. Please check the <a
                href="http://10.169.140.40/hpm/HazardPatrolMonitoring">system</a> and click on the button if
            the findings is resolved now to close the findings.</p>
        {{-- <img src="{{ asset('http://hrdapps9:8888/ftp/pics/\R23-05-00001\build.png') }}" width="80px"> --}}
        {{-- <p>Try getting the data from backend {{ $data }}</p> --}}

        <a href="{{ $site }}" class="button">Approve !</a>
    </div>
</body>

</html>
